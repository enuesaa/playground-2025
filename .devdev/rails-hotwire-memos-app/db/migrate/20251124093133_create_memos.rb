class CreateMemos < ActiveRecord::Migration[8.1]
  def change
    create_table :memos do |t|
      t.text :title
      t.text :content

      t.timestamps
    end
  end
end
