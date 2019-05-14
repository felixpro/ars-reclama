class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.references :customer, foreign_key: true
      t.string :process
      t.integer :code
      t.integer :reclaimed
      t.integer :authorized
      t.integer :difference

      t.timestamps
    end
  end
end
