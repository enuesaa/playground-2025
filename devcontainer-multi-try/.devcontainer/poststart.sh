#!/bin/bash

# GO_APP_BRANCH="${GO_APP_BRANCH:-main}"
# NODE_APP_BRANCH="${NODE_APP_BRANCH:-main}"

# git clone --branch "$GO_APP_BRANCH" https://github.com/enuesaa/loadii.git
# git clone --branch "$NODE_APP_BRANCH" https://github.com/enuesaa/my-svelte-template.git

gh repo clone my-svelte-template

cd my-svelte-template
branch=$(gh pr list --assignee @me --state open --limit 1 --json headRefName --jq '.[0].headRefName')

if [ -z "$branch" ] || [ "$branch" = "null" ]; then
  echo "⚠️ アサインされたPRが見つかりません"
else
  echo "🔀 '$branch' に移動します..."
  gh pr checkout "$branch"
fi

echo "✅ Setup OK"
