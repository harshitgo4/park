import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Input, useToast } from '@chakra-ui/react'
import Header2 from '../components/Header2'
import SideBar from '../components/sidebar/Main'
import { Box, Button, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

function TaskPage() {
  const { id } = useParams()
  const toast = useToast()

  const router = useNavigate()
  const [showDrawer, setShowDrawer] = useState(false)

  const { colorMode, toggleColorMode } = useColorMode()

  const [email, setEmail] = useState(null)
  const [user, setUser] = useState(null)

  const textColor = useColorModeValue('gray.200', 'white')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bg = useColorModeValue('bg-gray-100', 'bg-[#1E293B]')
  return (
    <div className="h-[100vh] overflow-y-auto">
      <Header2
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        setUser={setUser}
        current={0}
        user={user}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
      />
      <div className={`flex pb-40 h-screen}`}>
        <SideBar
          showDrawer={showDrawer}
          user={user}
          email={email}
          router={router}
          setShowDrawer={setShowDrawer}
          toggleColorMode={toggleColorMode}
        />
        <main className="z-1 mx-auto w-full md:pl-80 p-4 overflow-y-auto">
          <div className={`${bg} m-2 flex flex-row rounded-lg p-8`}>
            <div className="w-full">
              {' '}
              <h1 className="font-semibold mb-8">Tasks Details</h1>
              <Box className="space-y-4" p={4}>
                <div className="flex items-center">
                  <span className="w-28 p-2 inline-block text-white">
                    Task Id:
                  </span>
                  <span className="font-semibold  p-2 rounded-lg bg-blue-500 ">{id}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 p-2 inline-block text-white">
                    Task Status:
                  </span>
                  <span className="font-semibold  p-2 rounded-lg bg-blue-500 ">Completed</span>
                </div>
              </Box>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default TaskPage