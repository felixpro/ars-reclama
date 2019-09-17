class CreateProcedures < ActiveRecord::Migration[5.2]
  def change
    create_table :procedures do |t|
      t.references :customer, foreign_key: true
      t.string :conclusion
      t.string :description

      t.timestamps
    end
  end
end
