class Album < ActiveRecord::Base
  attr_accessible :cover_photo, :name, :user_id, :photo_ids
  has_many :album_photos
  has_many :photos, through: :album_photos
  belongs_to :photo, foreign_key: 'cover_photo'
  belongs_to :user
  before_validation :set_cover_photo

  private 

  def set_cover_photo
    self.photo = self.photos.first
  end
end
