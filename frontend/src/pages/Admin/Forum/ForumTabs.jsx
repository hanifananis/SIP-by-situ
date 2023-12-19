import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import ManageForum from './ManageForum'
import ManageComment from './ManageComment'

const ForumTabs = ({ dataComment, dataForum }) => {
  return (
    <Tabs variant='soft-rounded' colorScheme='yellow'>
      <TabList>
        <Tab>Forum</Tab>
        <Tab>Comment</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ManageForum />
        </TabPanel>
        <TabPanel>
            <ManageComment />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ForumTabs