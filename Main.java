package Workshop;

import javax.swing.*;
import java.awt.*;

public class Main {
    public static void main(String[] args) {
        // Үндсэн цонх үүсгэх
        JFrame frame = new JFrame("Ажлын Жагсаалт");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        // BorderLayout ашиглах
        frame.setLayout(new BorderLayout());

        
        // Зүүн талын багана (Хийх ажлын жагсаалт)
        JPanel leftPanel = new JPanel();
        leftPanel.setLayout(new BoxLayout(leftPanel, BoxLayout.Y_AXIS));
        leftPanel.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(Color.BLACK, 1),
                BorderFactory.createEmptyBorder(20, 20, 20, 20)
        ));
        
        
        JLabel leftTitle = new JLabel("Хийх ажлын жагсаалт");
        leftPanel.add(leftTitle);

        JLabel taskCountLabel = new JLabel("Ажлын жагсаалт (6)");
        leftPanel.add(taskCountLabel);

        JPanel taskListPanel = new JPanel();
        taskListPanel.setLayout(new BoxLayout(taskListPanel, BoxLayout.Y_AXIS));
        taskListPanel.setBorder(BorderFactory.createEmptyBorder(40,40,40,40));

        String[] tasks = {"1. Ажил", "2. Ажил", "3. Ажил", "4. Ажил", "5. Ажил"};
        for (String task : tasks) {
            JCheckBox checkBox = new JCheckBox(task);
            taskListPanel.add(checkBox);
        }

        leftPanel.add(taskListPanel);

        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new FlowLayout(FlowLayout.LEFT));

        JButton saveToDatabaseButton = new JButton("Баазад хадгалах");
        JButton saveToFileButton = new JButton("Файлд хадгалах");

        buttonPanel.add(saveToDatabaseButton);
        buttonPanel.add(Box.createRigidArea(new Dimension(10, 0))); // add some space between buttons
        buttonPanel.add(saveToFileButton);

        leftPanel.add(buttonPanel);

        // Баруун талын багана (Ажил нэмэх)
        JPanel rightPanel = new JPanel();
        rightPanel.setLayout(new BoxLayout(rightPanel, BoxLayout.Y_AXIS));
        rightPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        JLabel rightTitle = new JLabel("Ажил нэмэх");
        rightPanel.add(rightTitle);

        JLabel addTaskLabel = new JLabel("Ажлын тухай бичнэ үү");
        rightPanel.add(addTaskLabel);

        JTextArea taskDescriptionArea = new JTextArea(5, 5);
        taskDescriptionArea.setLineWrap(true);
        taskDescriptionArea.setWrapStyleWord(true);
        JScrollPane scrollPane = new JScrollPane(taskDescriptionArea);
        rightPanel.add(scrollPane);

        JButton addTaskButton = new JButton("Шинэ ажил нэмэх");
        rightPanel.add(addTaskButton);

        // Эдгээрийг BorderLayout-д нэмэх
        frame.add(leftPanel, BorderLayout.WEST);
        frame.add(rightPanel, BorderLayout.EAST);

        // Цонхыг харуулах
        frame.setVisible(true);
}
}
