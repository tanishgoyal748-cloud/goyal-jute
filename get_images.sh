#!/bin/bash

echo '{
  "pp-woven-fabric": {
    "name": "PP Woven Fabric",
    "img": "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80",
    "hd": "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=2000&q=90",
    "alt": "Industrial polypropylene woven fabric textile",
    "credit": "Unsplash"
  },
  "jute-bags": {
    "name": "Jute Bags",
    "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "hd": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=90",
    "alt": "Natural jute eco-friendly bags",
    "credit": "Unsplash"
  },
  "pp-woven-bags": {
    "name": "PP Woven Bags",
    "img": "https://images.unsplash.com/photo-1492707892657-8a91d798cbfd?w=800&q=80",
    "hd": "https://images.unsplash.com/photo-1492707892657-8a91d798cbfd?w=2000&q=90",
    "alt": "Industrial storage bags woven plastic",
    "credit": "Unsplash"
  },
  "jute-bales": {
    "name": "Jute Bales",
    "img": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80",
    "hd": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=2000&q=90",
    "alt": "Raw jute fiber agricultural bales",
    "credit": "Unsplash"
  }
}' > unsplash_images.json
echo "✓ Image metadata prepared (2K HD URLs)"
