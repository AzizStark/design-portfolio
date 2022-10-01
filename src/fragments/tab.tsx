import { useColorModeValue, Tab } from '@chakra-ui/react';

export const CustomTab = (props: any) => {
  const text = useColorModeValue('dark', 'light');
  const tabColor = useColorModeValue(
    'linear-gradient(120deg, #f093fb 0%, #e2707f 100%)',
    'linear-gradient(45deg, #874da2 0%, #c43a30 100%);'
  );
  const textColor = useColorModeValue('white', 'white');
  const bgColor = useColorModeValue('white', 'grey');
  const boxShadow = useColorModeValue(
    '0 10px 20px -7px rgb(0 0 0 / 22%)',
    'black'
  );

  return (
    <Tab
      aria-label={`Switch to ${text} mode`}
      borderRadius={6}
      paddingBottom={1}
      paddingTop={1}
      margin={0.5}
      userSelect="none"
      fontSize={{ base: '14px', md: '16px', lg: '18px' }}
      _hover={{ boxShadow: boxShadow, bg: bgColor }}
      _selected={{ color: textColor, bg: tabColor, boxShadow: boxShadow }}
      {...props}
    />
  );
};
