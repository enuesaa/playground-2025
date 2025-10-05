FROM postgres:17.4-bookworm

RUN apt update && apt install -y \
    git \
    make \
    gcc \
    postgresql-server-dev-17 \
    libssl-dev \
    pkg-config \
    curl \
    libreadline-dev \
    build-essential \
    zlib1g-dev \
    bison \
    flex

RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
ENV PATH="/root/.cargo/bin:$PATH"

RUN cargo install --locked cargo-pgrx

WORKDIR /rust-pgrx-try
