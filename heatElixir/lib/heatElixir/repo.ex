defmodule HeatElixir.Repo do
  use Ecto.Repo,
    otp_app: :heatElixir,
    adapter: Ecto.Adapters.Postgres
end
