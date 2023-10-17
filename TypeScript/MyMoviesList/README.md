# MyMoviesList

## Project overview:
<p>The project is a basic code made with the aim of practicing TypeScript, and is basically an API for a movie organizer, in which the user
You can create categories for movie, streaming service categories, and movies. Entities are structured as follows:<p>

#### Platform:

<p>{<br>id: number,<br>name: string<br>}
<p>

### Genre:

<p>{<br>id: number,<br>name: string<br>}
<p>

### Movie:

<p>{<br>id: number,<br>name: string,<br>platformId: number,<br>genreId: number,<br>status: string,
<br>review: string,<br>grade: number<br>}
<p>

## Operation of Routes:
### Get "/": 
<p>Returns list containing all listed films<p>

### Get "/moviesperplatform":
<p>Returns the number of films listed by platform<p>

### Get "/moviespergenre":
<p>Returns the number of films listed by genre<p>

### Post "/platform"
<p>Receives an object in the format {name} and inserts a new category name<p>

### Post "/genre"
<p>Receives an object in the format {name} and inserts a new gender name<p>

### Post "/movie"
<p>Receives the name, platformId and genreId parameters and inserts a new film into the bank<P>

### Put "/movie"
<p>It receives the status, review and grade parameters and updates a movie in the bank, the status parameter can just be
"Unwatched", "Watching" or "Watched"<p>

### Delete "/movie/:id"
<p>Receives the movie id by params and removes the movie from the bank<p>
