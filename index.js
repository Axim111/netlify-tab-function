import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://nyldhvyqngmczhaebsdx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55bGRodnlxbmdtY3poYWVic2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzU4MDIsImV4cCI6MjAyODg1MTgwMn0.FsgQ-uqpZR1_QHv1Vr1bJBUnOd-Q-SwPuGm7q6Wvzj8')
const main = async () => {
  const { error } = await supabase
    .from('clients')
    .insert({ email: 'tab1' })
  if (error) {
    console.log(error)
    return


  }

}
main()