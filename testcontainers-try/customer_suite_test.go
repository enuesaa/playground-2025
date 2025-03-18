package main

import (
	"context"
	"log"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
	"github.com/enuesaa/playground-2025/testcontainers-try/testhelpers"
)

func TestCustomerRepoTestSuite(t *testing.T) {
	// suite.TestingSuite
	suite.Run(t, new(CustomerRepoTestSuite))
}

type CustomerRepoTestSuite struct {
	suite.Suite
	pgContainer *testhelpers.PostgresContainer
	repository  *Repository
	ctx         context.Context
}

func (suite *CustomerRepoTestSuite) SetupSuite() {
	suite.ctx = context.Background()

	pgContainer, err := testhelpers.CreatePostgresContainer(suite.ctx)
	if err != nil {
		log.Fatal(err)
	}
	suite.pgContainer = pgContainer
	repository, err := NewRepository(suite.ctx, suite.pgContainer.ConnectionString)
	if err != nil {
		log.Fatal(err)
	}
	suite.repository = repository
}

func (suite *CustomerRepoTestSuite) TearDownSuite() {
	if err := suite.pgContainer.Terminate(suite.ctx); err != nil {
		log.Fatalf("error terminating postgres container: %s", err)
	}
}

func (suite *CustomerRepoTestSuite) TestCreateCustomer() {
	t := suite.T()

	customer, err := suite.repository.CreateCustomer(suite.ctx, Customer{
		Name:  "Henry",
		Email: "henry@example.com",
	})
	assert.NoError(t, err)
	assert.NotNil(t, customer.Id)
}

func (suite *CustomerRepoTestSuite) TestGetCustomerByEmail() {
	t := suite.T()

	customer, err := suite.repository.GetCustomerByEmail(suite.ctx, "john@example.com")
	assert.NoError(t, err)
	assert.NotNil(t, customer)
	assert.Equal(t, "John", customer.Name)
	assert.Equal(t, "john@example.com", customer.Email)
}
