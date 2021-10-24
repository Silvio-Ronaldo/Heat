defmodule HeatElixir.MessagesView do
  use HeatElixirWeb, :view

  def render("create.json", %{message: message}) do
    %{
      result: "Message created!",
      message: message
    }
  end
end
