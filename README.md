## Twitch Viewer Analysis App

React.js Application that displays viewers for the Science and Technology section of Twitch by hour or weekday using d3.
The backend uses a Firestore cloud database. Data is pulled once every hour using a cron job on my computer and sent to Firestore.


## Future Work
  - Tensor Flow linear regression to predict number of viewers depending on hour or day selected.
  - Personal viewer analysis by importing twitch streamer data.
  - Heat map type display instead of or in addition to bar chart to display viewers (similar to GitHub's commit chart)
  
## REsources
Redux File Organization: https://code.likeagirl.io/tutorial-for-adding-redux-to-a-react-app-1a94cc1738e5
Embedding machine learning models: https://towardsdatascience.com/embedding-machine-learning-models-to-web-apps-part-1-6ab7b55ee428
