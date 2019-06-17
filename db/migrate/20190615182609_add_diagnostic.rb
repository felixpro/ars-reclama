class AddDiagnostic < ActiveRecord::Migration[5.2]
  def change
    add_column :reclamations, :diagnostic, :string
  end
end
