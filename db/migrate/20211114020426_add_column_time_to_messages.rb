class AddColumnTimeToMessages < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :time, :string
  end
end
