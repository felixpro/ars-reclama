class Reclamation < ApplicationRecord
  belongs_to :customer

  enum therapist: [:Dr_Enrique_Antonio_paredes, :Lic_Josefina_García, :Lic_Alejandro_Colón]



end
