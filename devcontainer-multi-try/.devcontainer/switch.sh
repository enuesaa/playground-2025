
# branch=$(gh pr list --assignee @me --state open --limit 1 --json headRefName --jq '.[0].headRefName')

# if [ -z "$branch" ] || [ "$branch" = "null" ]; then
#   echo "⚠️ アサインされたPRが見つかりません。mainブランチへ移動します。"
#   git checkout main
# else
#   echo "🔀 '$branch' に移動します..."
#   gh pr checkout "$branch"
# fi
