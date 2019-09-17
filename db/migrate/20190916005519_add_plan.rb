class AddPlan < ActiveRecord::Migration[5.2]
  def change
    add_column :procedures, :plan, :string
  end
end
