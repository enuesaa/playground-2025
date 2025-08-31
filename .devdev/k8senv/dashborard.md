# k8s dashboard

cloudflared のインストール

```bash
# see https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/local-management/create-local-tunnel/

mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null

echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared any main" | tee /etc/apt/sources.list.d/cloudflared.list

apt update && apt install -y cloudflared
```

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
vim dashboard.yml
kubectl apply -f dashboard.yml
kubectl -n kubernetes-dashboard create token admin-user
kubectl proxy --address='0.0.0.0' --accept-hosts='^*$'
cloudflared tunnel --url http://localhost:8001

# /api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/ へ
```

dashboard.yml
```yml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
```
