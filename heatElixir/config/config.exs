# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :heatElixir,
  ecto_repos: [HeatElixir.Repo]

# Configures the endpoint
config :heatElixir, HeatElixirWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "yaUOfQARfZsDByAO7lvl1noapGOsCfZMDdvZSN/MxurSHl8epRx3I7VHJPI5MBDU",
  render_errors: [view: HeatElixirWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: HeatElixir.PubSub,
  live_view: [signing_salt: "ZGADkG98"]

config :heatElixir, HeatElixir.Scheduler, jobs: [
  {"* * * * *", {HeatElixir.Tags.Count, :call, []}}
]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
