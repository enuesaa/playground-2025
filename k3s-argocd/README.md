# k3s ArgoCD

```bash
# k3s のインストール
curl -sfL https://get.k3s.io | sh -
k3s kubectl get nodes

# ArgoCD のインストール
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "NodePort"}}'

# ArgoCD のポートを確認
kubectl get svc -n argocd

# admin のパスワードを表示
kubectl -n argocd get secret argocd-initial-admin-secret   -o jsonpath="{.data.password}" | base64 -d; echo
```
