FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN apt-get update && \
    apt-get install -y git curl make openssh-client socat

WORKDIR workspace

# RUN curl -LO https://golang.org/dl/go1.21.8.linux-amd64.tar.gz && \
#     tar -C /usr/local -xzf go1.21.8.linux-amd64.tar.gz && \
#     rm go1.21.8.linux-amd64.tar.gz
# ENV PATH="/usr/local/go/bin:$PATH"

# RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
#     apt-get install -y nodejs
