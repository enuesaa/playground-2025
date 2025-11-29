class Memo < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true

  scope :ordered, -> { order(title: :asc) }
end
