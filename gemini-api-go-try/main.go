package main

import (
	"context"
	"fmt"
	"os"

	"github.com/google/generative-ai-go/genai"
	"google.golang.org/api/option"
)

func main() {
	apikey := os.Getenv("GEMINI_API_KEY")
	if apikey == "" {
		panic("missing: GEMINI_API_KEY")
	}
	ctx := context.Background()

	client, err := genai.NewClient(ctx, option.WithAPIKey(apikey))
	if err != nil {
		panic(err)
	}
	defer client.Close()

	model := client.GenerativeModel("gemini-1.5-flash")
	cs := model.StartChat()

	res, err := cs.SendMessage(ctx, genai.Text("パリの観光名所を教えて"))
	if err != nil {
		panic(err)
	}
	fmt.Printf("%+v\n", res)

	for _, cand := range res.Candidates {
		if cand.Content != nil {
			for _, part := range cand.Content.Parts {
				fmt.Println(part)
			}
		}
	}
}
