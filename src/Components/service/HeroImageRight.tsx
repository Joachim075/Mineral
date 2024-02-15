import { Link } from "react-router-dom";
import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title style={{textAlign:'left'}} className={classes.title}>
              
            "Embrace Opulence: <br/>Indulge in Our Exquisite Collection"
            </Title>

            <Text style={{textAlign:'left'}} className={classes.description} mt={30}>
            Embark on a Journey of Discovery:
             Explore Our Exclusive Collection, Anytime, Anywhere</Text>

             <Link to="/providers" target="_self" > 
            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Contact Us.
            </Button></Link>
          </div>
        </div>
      </Container>
    </div>
  );
}