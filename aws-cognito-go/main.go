package main

import (
	"context"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/cognitoidentityprovider"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	cfg, err := config.LoadDefaultConfig(context.Background(), config.WithRegion("ap-northeast-1"))
	if err != nil {
		panic(err)
	}

	app := &App{
		cognitoClient: cognitoidentityprovider.NewFromConfig(cfg),
		userPoolID:    "",
		clientID:      "",
	}

	e := echo.New()
	e.Use(middleware.RequestLogger())
	e.Use(middleware.Recover())

	// Public endpoints
	e.POST("/signup", app.SignUp)
	e.POST("/confirm", app.ConfirmSignUp)
	e.POST("/signin", app.SignIn)
	e.POST("/change-email", app.ChangeEmail)
	e.POST("/change-password", app.ChangePassword)
	e.POST("/forgot-password", app.ForgotPassword)
	e.POST("/confirm-forgot-password", app.ConfirmForgotPassword)

	// Protected endpoints (with JWT verification)
	protected := e.Group("")
	protected.Use(app.jwtMiddleware)
	protected.GET("/hello", app.Hello)

	e.Logger.Fatal(e.Start(":8080"))
}
