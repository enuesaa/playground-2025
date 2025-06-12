package main

import (
	"flag"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"

	"github.com/spf13/cobra"
)

var (
	method string
	rootCmd = &cobra.Command{
		Use:   "claude-code-httpcallapp [URL]",
		Short: "A curl-like HTTP client tool",
		Args:  cobra.ExactArgs(1),
		Run:   run,
	}
)

func main() {
	flag.StringVar(&method, "X", "GET", "HTTP method")
	rootCmd.Flags().StringVarP(&method, "request", "X", "GET", "HTTP method")

	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v\n", err)
		os.Exit(1)
	}
}

func run(cmd *cobra.Command, args []string) {
	url := args[0]
	
	method = strings.ToUpper(method)
	
	req, err := http.NewRequest(method, url, nil)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error creating request: %v\n", err)
		os.Exit(1)
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error making request: %v\n", err)
		os.Exit(1)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading response: %v\n", err)
		os.Exit(1)
	}

	fmt.Print(string(body))
}