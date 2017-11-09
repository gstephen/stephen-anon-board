Description - App is pretty straight forward. Add a message in the text area which can then be up or downvoted using the icons to the right of the message. A message can also be deleted from here.

The sort buttons will sort the messages based on the number of likes, asc or dsc. Or alternatively will sort the messages based on the time that they were added to the board (messages hardcoded all have the same timestamp value)

Search uses an array filter to match an entered text selection against the data that exists in the array and will show any messages which match the entered text.

Issues/Problems - Knowing what I know now after building this I would probably have moved the mapping of the messages into the messages component and combined the sorting as part of this component

I found the search the most difficult part. I tried to build search as a component and include the parts which now live in app.js in this component but struggled with sending states between app and search to modify messages. I eventually settled on putting the search functionality directly in app.

I would have liked to refine the sort functionality also as there is quite a bit of repeating happening, sortoldnew and sortascdsc are pretty much doing the exact same thing but acting on different properties of messages. I tried to combine all of the sort functions into one sort.js file but couldn't work out how to display a different button for each requirement using only one component.
