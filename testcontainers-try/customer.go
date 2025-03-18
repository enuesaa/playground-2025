package main

import (
	"context"

	"github.com/jackc/pgx/v5"
)

type Customer struct {
	Id    int
	Name  string
	Email string
}

func NewRepository(ctx context.Context, connStr string) (*Repository, error) {
	conn, err := pgx.Connect(ctx, connStr)
	if err != nil {
		return nil, err
	}
	return &Repository{conn: conn}, nil
}

type Repository struct {
	conn *pgx.Conn
}

func (r *Repository) CreateCustomer(ctx context.Context, customer Customer) (Customer, error) {
	sql := "INSERT INTO customers (name, email) VALUES ($1, $2) RETURNING id"
	query := r.conn.QueryRow(ctx, sql, customer.Name, customer.Email)

	if err := query.Scan(&customer.Id); err != nil {
		return Customer{}, err
	}
	return customer, nil
}

func (r *Repository) GetCustomerByEmail(ctx context.Context, email string) (Customer, error) {
	var customer Customer
	sql := "SELECT id, name, email FROM customers WHERE email = $1"
	query := r.conn.QueryRow(ctx, sql, email)
	
	if err := query.Scan(&customer.Id, &customer.Name, &customer.Email); err != nil {
		return Customer{}, err
	}
	return customer, nil
}
