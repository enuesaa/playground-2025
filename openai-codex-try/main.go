package main

import (
    "fmt"
    "io"
    "net/http"
    "os"

    "github.com/spf13/cobra"
)

func main() {
    rootCmd := &cobra.Command{
        Use:   "curl [url]",
        Short: "Minimal curl-like GET using Cobra",
        Args:  cobra.MaximumNArgs(1),
        RunE: func(cmd *cobra.Command, args []string) error {
            url := "https://example.com"
            if len(args) == 1 {
                url = args[0]
            }

            req, err := http.NewRequest(http.MethodGet, url, nil)
            if err != nil {
                return err
            }

            resp, err := http.DefaultClient.Do(req)
            if err != nil {
                return err
            }
            defer resp.Body.Close()

            _, err = io.Copy(os.Stdout, resp.Body)
            return err
        },
    }

    if err := rootCmd.Execute(); err != nil {
        fmt.Fprintln(os.Stderr, err)
        os.Exit(1)
    }
}

