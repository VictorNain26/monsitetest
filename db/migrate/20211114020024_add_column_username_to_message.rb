class AddColumnUsernameToMessage < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :username, :string
  end
end
