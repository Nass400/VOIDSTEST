# VOIDS Test



## Installation

To run the Application:

```bash
sudo docker compose -f docker-compose.yml up -d --build
```
To visualize Server side Logs:

```bash
sudo docker logs voids_test-voids-server-1  -f
```
To visualize Client side Logs:

```bash
sudo docker logs voids_test-voids-client-1  -f
```

    
    
## Features

- forecasts sales Table based on Store Location.
- Alerts generator to close the Store based on Store Location.
- Chart showing forcasted sales and Temperature based on store location so that you can take manual decisions based on the data showing

## Tech Stack

**Client:** React, TailwindCSS, chart.js

**Server:** Node, Express, mocha, Postgres, swagger

Along with Docker and docker compose

## API Swagger

#### To test APIs with Swagger

```http
  GET http://localhost:3000/api-docs/
```

![App Screenshot](https://cdn3.fileup.to/cache/plugins/filepreviewer/260454/044dc5719f90169d9f1dcf8448654aef93702da8bd69f0c59685d33ea26a78e7/1100x800_cropped.jpg)




## Screenshots

![App Screenshot](https://cdn3.fileup.to/cache/plugins/filepreviewer/260471/8fbe662146785ae2560ac6baeaaa2da7b3a779fd221f0edd0d1c9039efe16ca9/1100x800_cropped.jpg)
![App Screenshot](https://cdn3.fileup.to/cache/plugins/filepreviewer/260470/da48de969286704eef222b4d2ada7d0010e8ddd966d9942c9465d904efae513b/1100x800_cropped.jpg)
![App Screenshot](https://cdn3.fileup.to/cache/plugins/filepreviewer/260472/452df5a8fab7a5981e0ddd6dc6d8df08f3a5e91d2062bfa64649a1ab9f62dd9a/1100x800_cropped.jpg)
![App Screenshot](https://cdn3.fileup.to/cache/plugins/filepreviewer/260473/b466f714ef2b98e451d6b71ad099d68c50304c6fc5e7f961bcc61526c3c63474/1100x800_cropped.jpg)


## Running Tests

I have Written some tests for the /forecasts/:location and /forecasts APIs in
```bash
  voidsbackend/test/user.test.js
```
