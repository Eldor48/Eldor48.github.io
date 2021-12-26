// Get latest episode spotify API
function getEpisodeSpotify {
  curl -s "https://api.spotify.com/v1/search?q=podcast:${1}&type=episode&limit=1" | jq -r '.tracks.items[0].id'
}

