package main

import (
	"encoding/json"
	"fmt"
	"strings"
	"testing"

	"github.com/gkampitakis/go-snaps/match"
	"github.com/gkampitakis/go-snaps/snaps"
)

var snap = snaps.WithConfig(
	snaps.Dir("testdata"),
	snaps.Filename("snapshot"),
	snaps.JSON(snaps.JSONConfig{
		Width:    80,
		Indent:   "  ",
		SortKeys: true,
	}),
)

func TestJSON(t *testing.T) {
	snap.MatchJSON(t, `{"a":"b"}`)
}

func TestGetBook(t *testing.T) {
	actual := GetBook()
	bytes, err := json.Marshal(actual)
	if err != nil {
		panic(err)
	}
	memoMatcher := match.Custom("Memo", func(val any) (any, error) {
		if strings.HasPrefix(val.(string), "memo, create at ") {
			// 一つ目は placeholder らしい。スナップショットファイルに記載される文言
			return "memo, create at <date>", nil
		}
		// err を返すこともできるし、なんなら err を返さず val != placeholder とすることもできる
		return val, fmt.Errorf("invalid")
	})
	snap.MatchJSON(t, string(bytes), memoMatcher)
}
