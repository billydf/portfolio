import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br />
   <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      This is the technologies and professional services i've been involved with.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>DMS</ListTitle>
          <ListParagraph>
            Experience with <br />
            Document Management System
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>MPS</ListTitle>
          <ListParagraph>
            Experience with <br />
            Handling Managed Print Services 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle> ITS</ListTitle>
          <ListParagraph>
            Experience with <br />
            IT Services
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Virtualization</ListTitle>
          <ListParagraph>
            Experience with <br />
            Virtualization Technologies
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Document Digitalization</ListTitle>
          <ListParagraph>
            Experience with <br />
            Managing physical document to digital 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
 </Section>
);

export default Technologies;
