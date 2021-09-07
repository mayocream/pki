import React, { ReactNode } from 'react'
import { Link as ReachLink } from '@reach/router'
import { useTranslation } from 'react-i18next'
import {
  IconButton,
  // Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  // VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  // MenuDivider,
  MenuItem,
  MenuList,
  // ChakraProvider,
  // Container,
} from '@chakra-ui/react'
import {
  FiHome,
  // FiTrendingUp,
  // FiCompass,
  // FiStar,
  // FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiInfo,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
// import { ReactText } from 'react'
import i18n from '../i18n'

interface LinkItemProps {
  name: string
  url: string
  icon: IconType
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', url: '/', icon: FiHome },
  { name: 'Certinfo', url: '/certinfo', icon: FiInfo },
]

export default function SidebarWithHeader({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" height="calc(100vh - 80px)">
        <Box bg={useColorModeValue('white', 'gray.900')} p="4" borderRadius="4" boxShadow="base">
          {children}
        </Box>
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { t, i18n } = useTranslation()
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {t(link.name)}
        </NavItem>
      ))}
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: Element
  url: string
}

const NavItem = ({ icon, children, url, ...rest }: NavItemProps) => {
  return (
    <Link as={ReachLink} to={url} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text display={{ base: 'flex', md: 'none' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} px={4} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <div>{i18n.language}</div>
              <FiChevronDown />
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              {i18n.languages.map((lang) => (
                <MenuItem key={lang}>{lang}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
