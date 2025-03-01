package routes

import "github.com/labstack/echo/v4"

func GetUser(c echo.Context) error {
	_, span := tracer.Start(c.Request().Context(), "getUser")
	defer span.End()

	return c.String(200, "aaa")
}
