class CreateCompletions < ActiveRecord::Migration[5.0]
  def change
    create_table :completions do |t|
      t.integer :user_id, null: false
      t.integer :route_id, null: false
      t.timestamps
    end
  end
end
