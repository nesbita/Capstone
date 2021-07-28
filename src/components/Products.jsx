import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Row from 'react-bootstrap/Row'

const Products = () => {
    return (
        <div class='productContainer'>
          <h1>Browse For Products Below!</h1>
            <Container>
              <Row>
                <div class='card1'>
                  <CardColumns>
                    <Card>
                      <Card.Img variant="top" src='https://i.imgur.com/G1gWKKj.jpeg' />
                        <Card.Body>
                          <Card.Text>
                            Sunflower Varieties <span class="price">$25</span> <Button href="http://localhost:3000/Cart">Add to Cart</Button><br/>
                            <small>Common, Maximillian, Helianthus debilis, Skyscraper, Mexican, American Giant, Sundance Kid, Little Becka, Pacino, Sunny Smile, Terracotta, Earth Walker, Chianti, Moulin Rouge. </small>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                  </CardColumns>
                  <br />
                </div>
              </Row>
            </Container>

            <Container>
              <Row>
                <div class='card2'>
                  <CardColumns>
                    <Card>
                      <Card.Img variant="top" src='https://i.imgur.com/Npn88ys.jpg' />
                        <Card.Body>
                          <Card.Text>
                            Elephant Ears <span class="price">$40</span> <Button href="http://localhost:3000/Cart">Add to Cart</Button><br/>
                            <small>Alocasia macrorrhiza Odora, Colocasia esculenta, Colocasia esculenta Black Magic, Colocasia esculenta Black Stem, Colocasia esculenta Diamond Head, Colocasia esculenta Hawaiian Punch, Colocasia esculenta Mojito, Colocasia esculenta Tea Cup</small>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                  </CardColumns>
                  <br />
                </div>
              </Row>
            </Container>

            <Container>
              <Row>
                <div class='card3'>
                  <CardColumns>
                    <Card>
                      <Card.Img variant="top" src='https://i.imgur.com/bXcJN1e.gif' />
                        <Card.Body>
                          <Card.Text>
                            Tea Garden Bundle <span class="price">$100</span> <Button href="http://localhost:3000/Cart">Add to Cart</Button><br/>
                            <small>Tea tree, Lemongrass, Peppermint, Chamomille, Hyssop, Lemon Balm, Stevia, Dried Fruit Variety</small>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                  </CardColumns>
                  <br />
                </div>
              </Row>
            </Container>

            <Container>
              <Row>
                <div class='card4'>
                  <CardColumns>
                    <Card>
                      <Card.Img variant='top' src='https://images.squarespace-cdn.com/content/v1/538cf3c4e4b0ebe38ce62b21/1587081469865-V05Z8F3EWKCRFJJA4RWM/Daffodil-Kraft-3.jpg?format=1000w' />
                        <Card.Body>
                          <Card.Text>
                            Seeds <span class="price">Price Varies</span> <Button href="http://localhost:3000/Cart">Add to Cart</Button><br/>
                            <small>Borage, Pickling Cucumber, Italian Parsley, Yellow Onion, Round Zucchini, Rainbow Carrots, Purple Grass, Graffiti Cauliflower, Basil, Nero di Toscana, Zinnia Varieties, Nasturtium Varieties, African Daisies, Candyfloss Cosmos, Dragon Tongue Beans, Mustard</small>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                  </CardColumns>
                  <br />
                </div>
              </Row>
            </Container>
        </div>
    )
}

export default Products;