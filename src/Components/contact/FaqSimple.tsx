import { Container, Title, Accordion } from '@mantine/core';
import classes from './FaqSimple.module.css';
import React from 'react';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function FaqSimple() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>What types of raw minerals do you offer for sale?</Accordion.Control>
          <Accordion.Panel>We offer a wide range of raw minerals, including gold, silver, red mercury, and diamonds.
</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Can I create more that one account?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>Are your minerals authentic and certified?</Accordion.Control>
          <Accordion.Panel>Yes, all our minerals are guaranteed to be authentic, and many come with certification from reputable organizations.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Can I purchase raw silver in various forms, such as bars or coins?</Accordion.Control>
          <Accordion.Panel>Yes, we offer raw silver in various forms, including bars, coins, and other unique specimens.
</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>Do you sell raw gold nuggets or refined gold bars?</Accordion.Control>
          <Accordion.Panel>We offer both raw gold nuggets and refined gold bars, catering to different preferences and needs.</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}