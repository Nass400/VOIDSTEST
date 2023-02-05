# VOIDSTEST


to run the project
you need to have Docker and Docker compose installed in your machine
RUN:
```
sudo docker compose -f docker-compose.yml up -d --build
sudo docker logs voids_test-voids-server-1  -f
sudo docker logs voids_test-voids-client-1  -f

```
this Should Run the Backend on port 3000 and the client side on the port 3001
