## Pasos a garantizar cuando se quiere crear el contenedor  de N8N:

mkdir -p ./n8n_data
mkdir -p ./n8n_cache
sudo chown -R 1000:1000 ./n8n_data ./n8n_cache


## Cambiar de url de webhook en ngrok
Para cambiar de url de webhook en ngrok, asignar a la variable WEBHOOK_URL: el valor.
Después reahcer contenedor: docker compose up -d

## Forzar a recrear todo el contenedor

docker compose up -d --force-recreate

## Realizar salva de base de datos en contenedor de docker

docker exec n8n_postgres pg_dump -U adminp -d mb_agent_adryo_dev_conmetadatos > /home/yasser/adryo_db_vector_backup.sql


## Ver logs de n8n

docker compose logs -f n8n

## Conocer el ip publico de ec2

TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")

curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/public-ipv4
18.119.40.190