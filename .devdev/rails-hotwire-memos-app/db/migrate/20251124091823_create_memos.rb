class CreateMemos < ActiveRecord::Migration[8.1]
  def change
    create_table :memos do |t|
      t.text :title, null: false
      t.text :content, null: false

      t.timestamps
    end
  end
end
