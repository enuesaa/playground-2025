require "sinatra"
require "thin"

set :server, :thin

get "/events" do
  content_type "text/event-stream"
  headers "Cache-Control" => "no-cache",
          "Connection"    => "keep-alive"

  stream(:keep_open) do |out|
    Thread.new do
      10.times do |i|
        out << "data: #{Time.now} - message #{i}\n\n"
        sleep 1
      end
      out.close
    end
  end
end
