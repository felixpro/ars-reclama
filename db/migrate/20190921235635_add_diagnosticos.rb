class AddDiagnosticos < ActiveRecord::Migration[5.2]
  def change
    add_column :procedures, :conclusion1, :string
    add_column :procedures, :conclusion2, :string

  end
end
