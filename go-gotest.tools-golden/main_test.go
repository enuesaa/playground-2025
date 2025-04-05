package main

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestAaa(t *testing.T) {
	expected := `aaa`

	assert.Equal(t, aaa(), expected)
}
