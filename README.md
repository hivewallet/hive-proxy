# hive-proxy

This started out as a general purpose proxy for POST and GET requests. [hive-js](https://github.com/hivewallet/hive-js) needs it for getting around [blockr](http://blockr.io/)'s CORS issue specific to POST requests sent from safari.
It has evolved to strip away unused data specifically for the /tx/raw/ endpoint to save on payload sent to client.

## Development

    git clone git@github.com:hivewallet/hive-proxy.git
    cd hive-proxy
    npm install
    CORS_ORIGINS=* npm start
    open http://localhost:9009
