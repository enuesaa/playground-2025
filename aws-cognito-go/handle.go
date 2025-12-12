package main

import (
	"context"
	"fmt"
	"net/http"
	"strings"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/cognitoidentityprovider"
	"github.com/aws/aws-sdk-go-v2/service/cognitoidentityprovider/types"
	"github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
	"github.com/lestrrat-go/jwx/v2/jwk"
)

type App struct {
	cognitoClient *cognitoidentityprovider.Client
	userPoolID    string
	clientID      string
}

type SignUpRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Username string `json:"username"`
}

type SignInRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type ChangeEmailRequest struct {
	AccessToken string `json:"access_token"`
	NewEmail    string `json:"new_email"`
}

type ChangePasswordRequest struct {
	AccessToken string `json:"access_token"`
	OldPassword string `json:"old_password"`
	NewPassword string `json:"new_password"`
}

type ConfirmSignUpRequest struct {
	Username string `json:"username"`
	Code     string `json:"code"`
}

// SignUp - ユーザー作成
func (a *App) SignUp(c echo.Context) error {
	req := new(SignUpRequest)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
	}

	input := &cognitoidentityprovider.AdminCreateUserInput{
		UserPoolId: aws.String(a.userPoolID),
		Username: aws.String(req.Username),
		UserAttributes: []types.AttributeType{
			{
				Name:  aws.String("email"),
				Value: aws.String(req.Email),
			},
			{
				Name:  aws.String("email_verified"),
				Value: aws.String("false"),
			},
		},
		MessageAction: types.MessageActionTypeSuppress,
	}

	_, err := a.cognitoClient.AdminCreateUser(c.Request().Context(), input)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}

	_, err = a.cognitoClient.AdminSetUserPassword(context.Background(), &cognitoidentityprovider.AdminSetUserPasswordInput{
		UserPoolId: aws.String(a.userPoolID),
		Username: aws.String(req.Username),
		Password: aws.String(req.Password),
		Permanent: true,
	})
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}

	_, err = a.cognitoClient.ResendConfirmationCode(context.Background(), &cognitoidentityprovider.ResendConfirmationCodeInput{
		ClientId: aws.String(a.clientID),
		Username: aws.String(req.Username),
	})
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}

	// _, err := a.cognitoClient.SignUp(context.Background(), &cognitoidentityprovider.SignUpInput{
	// 	ClientId: &a.clientID,
	// 	Username: &req.Username,
	// 	Password: &req.Password,
	// })
	// if err != nil {
	// 	return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	// }
	return c.JSON(http.StatusOK, map[string]any{})
}

// ConfirmSignUp - サインアップの確認
func (a *App) ConfirmSignUp(c echo.Context) error {
	req := new(ConfirmSignUpRequest)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
	}

	input := &cognitoidentityprovider.ConfirmSignUpInput{
		ClientId:         aws.String(a.clientID),
		Username:         aws.String(req.Username),
		ConfirmationCode: aws.String(req.Code),
	}

	_, err := a.cognitoClient.ConfirmSignUp(c.Request().Context(), input)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}
	return c.JSON(http.StatusOK, map[string]string{"message": "User confirmed successfully"})
}

// SignIn - ログイン
func (a *App) SignIn(c echo.Context) error {
	req := new(SignInRequest)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
	}

	input := &cognitoidentityprovider.InitiateAuthInput{
		AuthFlow: types.AuthFlowTypeUserPasswordAuth,
		ClientId: aws.String(a.clientID),
		AuthParameters: map[string]string{
			"USERNAME": req.Username,
			"PASSWORD": req.Password,
		},
	}

	result, err := a.cognitoClient.InitiateAuth(c.Request().Context(), input)
	if err != nil {
		return c.JSON(http.StatusUnauthorized, map[string]string{"error": err.Error()})
	}

	return c.JSON(http.StatusOK, map[string]any{
		"access_token":  *result.AuthenticationResult.AccessToken,
		"id_token":      *result.AuthenticationResult.IdToken,
		"refresh_token": *result.AuthenticationResult.RefreshToken,
		"expires_in":    result.AuthenticationResult.ExpiresIn,
	})
}

// ChangeEmail - メールアドレス変更
func (a *App) ChangeEmail(c echo.Context) error {
	req := new(ChangeEmailRequest)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
	}

	input := &cognitoidentityprovider.UpdateUserAttributesInput{
		AccessToken: aws.String(req.AccessToken),
		UserAttributes: []types.AttributeType{
			{
				Name:  aws.String("email"),
				Value: aws.String(req.NewEmail),
			},
		},
	}

	result, err := a.cognitoClient.UpdateUserAttributes(c.Request().Context(), input)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}

	return c.JSON(http.StatusOK, map[string]any{
		"message":          "Email update initiated. Please verify with the code sent.",
		"delivery_details": result.CodeDeliveryDetailsList,
	})
}

// ChangePassword - パスワード変更
func (a *App) ChangePassword(c echo.Context) error {
	req := new(ChangePasswordRequest)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
	}

	input := &cognitoidentityprovider.ChangePasswordInput{
		AccessToken:      aws.String(req.AccessToken),
		PreviousPassword: aws.String(req.OldPassword),
		ProposedPassword: aws.String(req.NewPassword),
	}

	_, err := a.cognitoClient.ChangePassword(c.Request().Context(), input)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}

	return c.JSON(http.StatusOK, map[string]string{"message": "Password changed successfully"})
}

// ForgotPassword - パスワードリセット開始
func (a *App) ForgotPassword(c echo.Context) error {
	username := c.FormValue("username")

	input := &cognitoidentityprovider.ForgotPasswordInput{
		ClientId: aws.String(a.clientID),
		Username: aws.String(username),
	}

	result, err := a.cognitoClient.ForgotPassword(c.Request().Context(), input)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}

	return c.JSON(http.StatusOK, map[string]any{
		"message":     "Password reset code sent",
		"destination": aws.ToString(result.CodeDeliveryDetails.Destination),
	})
}

// ConfirmForgotPassword - パスワードリセット確認
func (a *App) ConfirmForgotPassword(c echo.Context) error {
	username := c.FormValue("username")
	code := c.FormValue("code")
	newPassword := c.FormValue("new_password")

	input := &cognitoidentityprovider.ConfirmForgotPasswordInput{
		ClientId:         aws.String(a.clientID),
		Username:         aws.String(username),
		ConfirmationCode: aws.String(code),
		Password:         aws.String(newPassword),
	}

	_, err := a.cognitoClient.ConfirmForgotPassword(c.Request().Context(), input)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
	}

	return c.JSON(http.StatusOK, map[string]string{"message": "Password reset successfully"})
}

// JWT Middleware - トークン検証
func (a *App) jwtMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		authHeader := c.Request().Header.Get("Authorization")
		if authHeader == "" {
			return c.JSON(http.StatusUnauthorized, map[string]string{"error": "Missing authorization header"})
		}

		tokenString := strings.TrimPrefix(authHeader, "Bearer ")

		// Cognito の公開鍵で検証
		if err := a.verifyCognitoToken(tokenString); err != nil {
			return c.JSON(http.StatusUnauthorized, map[string]string{"error": "Invalid token: " + err.Error()})
		}

		// トークンをコンテキストに保存
		c.Set("token", tokenString)
		return next(c)
	}
}

// VerifyCognitoToken - Cognito JWT の検証
func (a *App) verifyCognitoToken(tokenString string) error {
	// JWKSのURL
	jwksURL := fmt.Sprintf("https://cognito-idp.ap-northeast-1.amazonaws.com/%s/.well-known/jwks.json", a.userPoolID)

	// JWKSを取得
	set, err := jwk.Fetch(context.Background(), jwksURL)
	if err != nil {
		return fmt.Errorf("failed to fetch JWKS: %w", err)
	}

	// トークンをパース
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (any, error) {
		// アルゴリズムの検証
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		// kid (Key ID) を取得
		kid, ok := token.Header["kid"].(string)
		if !ok {
			return nil, fmt.Errorf("kid header not found")
		}

		// JWKSから対応する公開鍵を取得
		key, ok := set.LookupKeyID(kid)
		if !ok {
			return nil, fmt.Errorf("key not found")
		}

		var pubKey any
		if err := key.Raw(&pubKey); err != nil {
			return nil, fmt.Errorf("failed to get public key: %w", err)
		}

		return pubKey, nil
	})

	if err != nil {
		return fmt.Errorf("failed to parse token: %w", err)
	}

	if !token.Valid {
		return fmt.Errorf("invalid token")
	}

	// クレームの検証（必要に応じて追加）
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return fmt.Errorf("invalid claims")
	}

	// token_use の検証
	if tokenUse, ok := claims["token_use"].(string); !ok || (tokenUse != "access" && tokenUse != "id") {
		return fmt.Errorf("invalid token_use")
	}

	return nil
}

func (a *App) Hello(c echo.Context) error {
	tokenString := c.Get("token").(string)

	// トークンから情報を取得
	token, _ := jwt.Parse(tokenString, nil)
	claims, _ := token.Claims.(jwt.MapClaims)

	return c.JSON(http.StatusOK, map[string]any{
		"username": claims["username"],
		"sub":      claims["sub"],
		"email":    claims["email"],
	})
}
