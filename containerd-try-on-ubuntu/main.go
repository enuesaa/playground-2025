// NOTE:
// see https://github.com/containerd/containerd/blob/main/docs/getting-started.md

package main

import (
	"context"
	"log"
	"time"

	containerd "github.com/containerd/containerd/v2/client"
	"github.com/containerd/containerd/v2/pkg/namespaces"
	"github.com/containerd/containerd/v2/pkg/oci"
)

func main() {
	if err := redisExample(); err != nil {
		log.Fatal(err)
	}
}

func redisExample() error {
        // これ実行する前に systemd start containerd をする
        // see https://github.com/containerd/containerd/blob/main/docs/getting-started.md
        client, err := containerd.New("/run/containerd/containerd.sock")
	if err != nil {
		return err
	}
	defer client.Close()

	ctx := namespaces.WithNamespace(context.Background(), "example")

        // docker コマンドとほぼ同じ？というより違いがわからない
	image, err := client.Pull(ctx, "docker.io/library/redis:alpine", containerd.WithPullUnpack)
	if err != nil {
		return err
	}
	log.Printf("Successfully pulled %s image\n", image.Name())

	container, err := client.NewContainer(
		ctx,
		"redis-server",
		containerd.WithNewSnapshot("redis-server-snapshot", image),
		containerd.WithNewSpec(oci.WithImageConfig(image)),
	)
	if err != nil {
		return err
	}
	defer container.Delete(ctx, containerd.WithSnapshotCleanup)
	log.Printf("Successfully created container with ID %s and snapshot with ID redis-server-snapshot", container.ID())

        time.Sleep(100 * time.Second)
	log.Printf("sleeped!\n")

        // たぶんここで redis を触れるのかな

	return nil
}
