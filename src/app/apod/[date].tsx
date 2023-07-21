import {useState, useEffect} from 'react'
import { Apod } from "@/types"
import { useLocalSearchParams } from "expo-router"
import { ScrollView, Text, ActivityIndicator } from 'react-native'
import { fetchApod } from "@/api/apods"
import ApodListItem from "@/components/ApodListItem"

const ApodDetails = () => {
  const {date} = useLocalSearchParams()
  const [apod, setApod] = useState<Apod>(null)

  useEffect(() => {
    fetchApod(date).then(setApod)
  }, [date])

  if (!apod) {
    return <ActivityIndicator />
  }



  return (
    <ScrollView>
      <ApodListItem apod={apod} />
      <Text
        style={{
          padding: 15,
          backgroundColor: 'white',
          lineHeight: 22,
          fontSize: 16,
          maxWidth: 500,
          width: '100%',
          alignSelf: 'center'
        }}>
          {apod.explanation}
      </Text>
    </ScrollView>
  )
}

export default ApodDetails